using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hinode.Website.Service.ApiServices.CommandApiService;
using Hinode.Website.Service.ApiServices.CommandApiService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hinode.Website.Controllers
{
    [Route("command")]
    [ApiController]
    public class CommandController : ControllerBase
    {
        private readonly ICommandApiService _commandApiService;

        public CommandController(ICommandApiService commandApiService)
        {
            _commandApiService = commandApiService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<CommandInfo>), StatusCodes.Status200OK)]
        public async Task<IActionResult> List()
        {
            return Ok(await _commandApiService.List());
        }

        [HttpGet("/{category:int}")]
        [ProducesResponseType(typeof(IEnumerable<CommandInfo>), StatusCodes.Status200OK)]
        public async Task<IActionResult> CategoryList(int category)
        {
            var commandsInfo = await _commandApiService.List();
            return Ok(commandsInfo.Where(x => x.Categories.Contains((CommandCategory) category)));
        }
    }
}
