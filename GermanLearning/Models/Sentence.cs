using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace GermanLearning.Models
{
    public class Sentence
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string GermanText { get; set; }
        public string EnglishTranslation { get; set; }
        public string Practiced { get; set; }
        public string Book { get; set; }


    }
}
