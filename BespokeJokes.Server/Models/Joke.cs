using System.ComponentModel.DataAnnotations;

namespace BespokeJokes.Server.Models
{
    public class Joke
    {
        [Key]
        public int JokeId { get; set; }
        public string JokeText { get; set; }
        public string PunchLineText { get; set; }
        public string Author { get; set; }
        public DateTime PostDate { get; set; }
        public DateTime UpdateDate { get; set; }

    }
}
