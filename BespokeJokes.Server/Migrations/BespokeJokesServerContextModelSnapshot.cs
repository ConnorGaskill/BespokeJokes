﻿// <auto-generated />
using System;
using BespokeJokes.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BespokeJokes.Server.Migrations
{
    [DbContext(typeof(BespokeJokesServerContext))]
    partial class BespokeJokesServerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("BespokeJokes.Server.Models.Joke", b =>
                {
                    b.Property<int>("JokeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("JokeId"));

                    b.Property<string>("Author")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("JokeText")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("PostDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("PunchLineText")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("datetime2");

                    b.HasKey("JokeId");

                    b.ToTable("Joke");

                    b.HasData(
                        new
                        {
                            JokeId = 1,
                            Author = "Colton Staggs",
                            JokeText = "What's a computer's favorite snack?",
                            PostDate = new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PunchLineText = "A mega-bite!",
                            UpdateDate = new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            JokeId = 2,
                            Author = "Connor Gaskill",
                            JokeText = "What do you call a fly with no wings?",
                            PostDate = new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PunchLineText = "A walk!",
                            UpdateDate = new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        },
                        new
                        {
                            JokeId = 3,
                            Author = "Connor Gaskill",
                            JokeText = "What's red and bad for your teeth",
                            PostDate = new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            PunchLineText = "A brick!",
                            UpdateDate = new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified)
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
