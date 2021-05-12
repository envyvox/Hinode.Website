using System.Reflection;
using Hinode.Website.Framework.Autofac;
using Hinode.Website.Framework.Web;
using Hinode.Website.Service.Options;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Autofac;

namespace Hinode.Website
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp/dist"; });
            services.AddControllers(x => x.Conventions.Add(new ApiRouteConvention()))
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddJsonOptions(x =>
                {
                    x.JsonSerializerOptions.Converters.Add(new TimeSpanSerializer());
                });
            services.AddOpenApiDocument(x => x.DocumentName = "api");
            services.AddHealthChecks();
            services.Configure<ApiOptions>(x => _config.GetSection("Api").Bind(x));
            services.AddHttpClient();
            services.AddControllers().AddNewtonsoftJson();
            services.AddSwaggerDocument();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseOpenApi();
            app.UseRouting();
            app.UseSwaggerUi3();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHealthChecks("/healthz");
            });
            app.UseSpaStaticFiles();

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                }
            });
        }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            var assembly = typeof(ApiOptions).Assembly;
            builder.RegisterAssemblyTypes(assembly)
                .Where(x => x.IsDefined(typeof(InjectableServiceAttribute), false) &&
                            x.GetCustomAttribute<InjectableServiceAttribute>().IsSingletone)
                .As(x => x.GetInterfaces()[0])
                .SingleInstance();

            builder.RegisterAssemblyTypes(assembly)
                .Where(x => x.IsDefined(typeof(InjectableServiceAttribute), false) &&
                            !x.GetCustomAttribute<InjectableServiceAttribute>().IsSingletone)
                .As(x => x.GetInterfaces()[0])
                .InstancePerLifetimeScope();
        }
    }
}
