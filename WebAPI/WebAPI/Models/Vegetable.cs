using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Vegetable
    {
        public int VegetableId { get; set; }
        public string VegetableName { get; set; }
        public string Price { get; set; }

        public string Color { get; set; }
    }
}
