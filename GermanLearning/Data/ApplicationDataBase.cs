using GermanLearning.Controllers;
using GermanLearning.Models;
using Microsoft.EntityFrameworkCore;

namespace GermanLearning.Data
{
    public class ApplicationDataBase : DbContext
    {
        public ApplicationDataBase(DbContextOptions<ApplicationDataBase> options) : base(options)
        {
                
        }
        public DbSet<Sentence> Sentences { get; set; }
    }
}
