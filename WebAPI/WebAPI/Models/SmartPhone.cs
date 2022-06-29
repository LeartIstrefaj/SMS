using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class SmartPhone
    {
        public int PhoneId { get; set; }
        public string PhoneName { get; set; }
        public string Imei { get; set; }
        public string Price { get; set; }
        public string Type { get; set; }

    }
}
