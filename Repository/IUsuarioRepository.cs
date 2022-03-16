using testesCS.Models;
namespace testesCS.Repository
{
    public interface IUsuarioRepository
    {
        Task<IEnumerable<Person>> BuscaUsuarios();
        Task<Person> BuscaUsuario(int id);
        void AdicionaUsuario(Person usuario);
        void AtualizaUsuario(Person usuario);
        void DeletaUsuario(Person usuario);
        Task<bool> SaveChangesAsync();
    }
}