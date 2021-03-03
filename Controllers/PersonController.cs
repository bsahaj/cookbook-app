using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cookbook.Controllers
{
    [ApiController]
    [Route("person")]
    public class PersonController : Controller
    {
       [HttpGet]
       public IEnumerable<Person> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Person(index, "person" + index.ToString())).ToArray();
        }
    }
}
