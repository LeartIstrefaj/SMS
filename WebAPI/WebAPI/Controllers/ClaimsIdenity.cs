using System.Security.Principal;

namespace WebAPI.Controllers
{
    internal class ClaimsIdenity : IIdentity
    {
        public object Claims { get; internal set; }
    }
}