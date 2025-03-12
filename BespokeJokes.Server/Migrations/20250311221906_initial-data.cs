using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BespokeJokes.Server.Migrations
{
    /// <inheritdoc />
    public partial class initialdata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Joke",
                columns: table => new
                {
                    JokeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JokeText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PunchLineText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Author = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Joke", x => x.JokeId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Joke");
        }
    }
}
