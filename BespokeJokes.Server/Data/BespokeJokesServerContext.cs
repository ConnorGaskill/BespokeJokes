using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BespokeJokes.Server.Models;

namespace BespokeJokes.Server.Data
{
    public class BespokeJokesServerContext : DbContext
    {
        public BespokeJokesServerContext (DbContextOptions<BespokeJokesServerContext> options)
            : base(options)
        {
        }

        public DbSet<BespokeJokes.Server.Models.Joke> Joke { get; set; } = default!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Joke>().HasData(

                new Joke
                {
                    JokeId = 1,
                    JokeText = "What's a computer's favorite snack?",
                    PunchLineText = "A mega-bite!",
                    Author = "Colton Staggs",
                    PostDate = new DateTime(25, 3, 11),
                    UpdateDate = new DateTime(25, 3, 11)
                },
                new Joke
                {
                    JokeId = 2,
                    JokeText = "What do you call a fly with no wings?",
                    PunchLineText = "A walk!",
                    Author = "Connor Gaskill",
                    PostDate = new DateTime(25, 3, 11),
                    UpdateDate = new DateTime(25, 3, 11)
                },
                new Joke
                {
                    JokeId = 3,
                    JokeText = "What's red and bad for your teeth",
                    PunchLineText = "A brick!",
                    Author = "Connor Gaskill",
                    PostDate = new DateTime(25, 3, 11),
                    UpdateDate = new DateTime(25, 3, 11)
                }

            );
        }
    }
}
