using System.Collections.Generic;
using AngularApi.Models;

namespace AngularApi.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularApi.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "AngularApi.Models.ApplicationDbContext";
        }

        protected override void Seed(AngularApi.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //

            context.People.AddOrUpdate(p => p.Name, new Person { Name = "Ali", BlogUrl = "http://aliwajdan.wordpress.com", About = "A software engineer" },
                new Person { Name = "Brice Lambson", BlogUrl = "http://Brice.wordpress.com", About = "A tester" },
                new Person { Name = "Rowan Miller", BlogUrl = "http://Rowan.wordpress.com", About = "Program manager at Entity Frame" });
        }
    }
}
