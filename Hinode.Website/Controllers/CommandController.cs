using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Hinode.Website.ApiClient;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hinode.Website.Controllers
{
    [Route("command")]
    [ApiController]
    public class CommandController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<CommandInfo>), StatusCodes.Status200OK)]
        public async Task<IActionResult> List()
        {
            var commandClient = new CommandClient(new HttpClient());
            var commands = await commandClient.ListAsync();
            return Ok(commands);
        }

        [HttpGet("{category:int}")]
        [ProducesResponseType(typeof(IEnumerable<CommandInfo>), StatusCodes.Status200OK)]
        public async Task<IActionResult> CategoryList(int category)
        {
            var commandClient = new CommandClient(new HttpClient());
            var commands = await commandClient.ListAsync();
            return Ok(commands.Where(x => x.Categories.Contains((CommandCategory) category)));
        }
    }
}
