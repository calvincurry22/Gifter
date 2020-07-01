using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gifter.Data;
using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly CommentsRepository _commentsRepo;

        public CommentsController(ApplicationDbContext context)
        {
            _commentsRepo = new CommentsRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_commentsRepo.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var comment = _commentsRepo.GetById(id);
            if(comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }

        [HttpGet("{getbypost/{id}")]
        public IActionResult GetByPost(int id)
        {
            return Ok(_commentsRepo.GetByPostId(id));
        }

        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            _commentsRepo.Add(comment);
            return CreatedAtAction("Get", new { id = comment.Id }, comment);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Comment comment)
        {
            if(id != comment.Id)
            {
                return BadRequest();
            }

            _commentsRepo.Update(comment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _commentsRepo.Delete(id);
            return NoContent();
        }
    }
}
