FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env

# Copy everything else and build
COPY Hinode.Website ./Hinode.Website

RUN dotnet restore Hinode.Website/Hinode.Website.csproj
RUN dotnet publish Hinode.Website/*.csproj -c Release -o out

FROM node:12.2.0 AS ng
WORKDIR /ClientApp
COPY --from=build-env /Hinode.Website/ClientApp .
RUN npm i
RUN npm i -g @angular/cli@11.2.5
RUN ng build --prod

# Build runtime image
WORKDIR /
FROM mcr.microsoft.com/dotnet/aspnet:5.0
COPY --from=build-env ./out .
COPY --from=ng /ClientApp/dist /ClientApp/dist
ENTRYPOINT ["dotnet", "Hinode.Website.dll"]
