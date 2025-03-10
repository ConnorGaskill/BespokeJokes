using System.ComponentModel.DataAnnotations;

namespace BespokeJokes.Server.Models
{
    public class Joke
    {
        [Key]
        public int JokeId { get; set; }
        public string JokeText { get; set; }
        public string PunchLineText { get; set; }
        public string JokeAuthor { get; set; }
        public DateTime JokePostDate { get; set; }
        public DateTime JokeUpdateDate { get; set; }

    }
}
