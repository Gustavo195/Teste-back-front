
using Microsoft.AspNetCore.Mvc;
using testesCS.Models;
using testesCS.Repository;

namespace testesCS.Controllers
{
    [Route("/home")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioRepository _repository;
        public UsuarioController(IUsuarioRepository repository)
        {
            _repository = repository;
        }
        
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var usuarios = await _repository.BuscaUsuarios();
            return usuarios.Any()? Ok(usuarios) : NoContent();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> GetbyId(int id)
        {
            var usuario = await _repository.BuscaUsuario(id);
            return usuario != null? Ok(usuario) : NoContent();
        }
        [HttpPost]
        public async Task<ActionResult> Post(Person usuario)
        {
            _repository.AdicionaUsuario(usuario);
            return await _repository.SaveChangesAsync() ? Ok("salvo") : BadRequest("erro");
        }
        [HttpPost("{id}")]
        public async Task<ActionResult> Put(int id, Person usuario)
        {
            var usuarioBanco = await _repository.BuscaUsuario(id);
            if (usuarioBanco == null) return NotFound();
            usuarioBanco.nome = usuario.nome ?? usuarioBanco.nome;
            _repository.AtualizaUsuario(usuarioBanco);
            return await _repository.SaveChangesAsync() ? Ok("Atualizado") : BadRequest("erro");

        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var usuarioBanco = await _repository.BuscaUsuario(id);
            if (usuarioBanco == null) return NotFound();
            _repository.DeletaUsuario(usuarioBanco);
            return await _repository.SaveChangesAsync() ? Ok("Deletado") : BadRequest("erro");
        }
    }
}