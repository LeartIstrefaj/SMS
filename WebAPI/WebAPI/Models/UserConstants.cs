using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class UserConstants
    {
        public static List<UserModel> Users = new List<UserModel>()
        {
            new UserModel() { Username = "ndriqim_admin", EmailAddress = "ndriqimib@gmail.com", Password = "123456789", GivenName = "Ndriqim", Surname = "Behrami", Role = "Administrator" },
            new UserModel() { Username = "leart_seller", EmailAddress = "leart03@gmail.com", Password = "987654321", GivenName = "Leart", Surname = "Istrefaj", Role = "Seller" },
        };
    }
}
