using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GermanLearning.Migrations
{
    public partial class Sentences : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sentences",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GermanText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EnglishTranslation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Practiced = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Book = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sentences", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sentences");
        }
    }
}
