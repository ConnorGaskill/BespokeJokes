using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BespokeJokes.Server.Migrations
{
    /// <inheritdoc />
    public partial class addedseeddata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Joke",
                columns: new[] { "JokeId", "Author", "JokeText", "PostDate", "PunchLineText", "UpdateDate" },
                values: new object[,]
                {
                    { 1, "Colton Staggs", "What's a computer's favorite snack?", new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "A mega-bite!", new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, "Connor Gaskill", "What do you call a fly with no wings?", new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "A walk!", new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, "Connor Gaskill", "What's red and bad for your teeth", new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified), "A brick!", new DateTime(25, 3, 11, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Joke",
                keyColumn: "JokeId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Joke",
                keyColumn: "JokeId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Joke",
                keyColumn: "JokeId",
                keyValue: 3);
        }
    }
}
