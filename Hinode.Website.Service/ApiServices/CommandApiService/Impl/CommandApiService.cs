using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Hinode.Website.Framework.Autofac;
using Hinode.Website.Service.ApiServices.CommandApiService.Models;
using Hinode.Website.Service.Options;
using Microsoft.Extensions.Options;

namespace Hinode.Website.Service.ApiServices.CommandApiService.Impl
{
    [InjectableService]
    public class CommandApiService : ICommandApiService
    {
        private readonly IOptions<ApiOptions> _options;
        private static HttpClient _client = new();

        public CommandApiService(IOptions<ApiOptions> options)
        {
            _options = options;
        }

        public async Task<IEnumerable<CommandInfo>> List()
        {
            var response = await _client.GetAsync(_options.Value.Url + "/command/list");
            return await response.Content.ReadFromJsonAsync<IEnumerable<CommandInfo>>();
        }
    }
}
