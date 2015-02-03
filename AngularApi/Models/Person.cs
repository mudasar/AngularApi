using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AngularApi.Models
{
    [Table("People")]
    public class Person
    {
        [Key]
        public int Id { get; set; }

        [StringLength(100, ErrorMessage = "The name must be 3 to 100 character long.", MinimumLength = 3)]
        [Required(ErrorMessage = "Name is required", AllowEmptyStrings = false)]
        public string Name { get; set; }

        public string BlogUrl { get; set; }

        public string About { get; set; }

    }
}