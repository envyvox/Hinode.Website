using System.Collections.Generic;
using System.Threading.Tasks;
using Hinode.Website.Service.ApiServices.CommandApiService.Models;

namespace Hinode.Website.Service.ApiServices.CommandApiService
{
    public interface ICommandApiService
    {
        Task<IEnumerable<CommandInfo>> List();
    }
}
