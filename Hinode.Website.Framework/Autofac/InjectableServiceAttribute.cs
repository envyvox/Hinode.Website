using System;

namespace Hinode.Website.Framework.Autofac
{
    public class InjectableServiceAttribute : Attribute
    {
        public bool IsSingletone { get; set; }
    }
}
