using testesCS.Models;
using Microsoft.EntityFrameworkCore;
namespace testesCS.Data
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
//tabela
        public DbSet<Person> Users {get;set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var usuario = modelBuilder.Entity<Person>();
        usuario.ToTable("tb_usuario");
        usuario.HasKey(x=>x.id);
        usuario.Property(x => x.id).HasColumnName("id").ValueGeneratedOnAdd();
        usuario.Property(x => x.nome).HasColumnName("nome").IsRequired();
    }
    }
    
}