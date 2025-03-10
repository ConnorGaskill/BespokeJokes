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
    }
}
