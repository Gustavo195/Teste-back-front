using testesCS.Data;
using testesCS.Models;
using Microsoft.EntityFrameworkCore;
namespace testesCS.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly UserContext _context;

        public UsuarioRepository(UserContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Person>> BuscaUsuarios()
        {
            return await _context.Users.ToListAsync();

        }
        public async Task<Person> BuscaUsuario(int id)
        {
            return await _context.Users.Where(x=>x.id==id).FirstOrDefaultAsync();
        }

         
        public void AdicionaUsuario(Person usuario)
        {
            _context.Add(usuario);
        }

        public void AtualizaUsuario(Person usuario)
        {
            _context.Update(usuario);
        }
        public void DeletaUsuario(Person usuario)
        {
            _context.Remove(usuario);
        }
        public async Task<bool> SaveChangesAsync()
        {
          return await _context.SaveChangesAsync() > 0;
        }
    }
}