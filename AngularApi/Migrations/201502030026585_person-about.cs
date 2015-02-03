namespace AngularApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class personabout : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "About", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "About");
        }
    }
}
