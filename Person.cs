using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cookbook
{
    public class Person
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public Person(int id, string name)
        {
            this.Name = name;
            this.Id = id;
        }

        public Person(int id, string name, string email, string password)
        {
            this.Name = name;
            this.Id = id;
            this.Email = email;
            this.Password = password;
        }
    }
}
