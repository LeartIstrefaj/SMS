using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Fruit
    {
        public int FruitId { get; set; }
        public string FruitName { get; set; }
        public string Price { get; set; }

        public string Color { get; set; }
    }
}
