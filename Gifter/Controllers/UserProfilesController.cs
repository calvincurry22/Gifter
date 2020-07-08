using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gifter.Data;
using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Gifter.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfilesController : ControllerBase
    {
        private readonly UserProfilesRepository _userProfilesRepository;
        public UserProfilesController(ApplicationDbContext context)
        {
            _userProfilesRepository = new UserProfilesRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userProfilesRepository.GetAll());
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var post = _userProfilesRepository.GetByFirebaseUserId(firebaseUserId);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post(UserProfile up)
        {
            _userProfilesRepository.Add(up);
            return CreatedAtAction("Get", new { id = up.Id }, up);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile up)
        {
            if (id != up.Id)
            {
                return BadRequest();
            }

            _userProfilesRepository.Update(up);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string firebaseUserId)
        {
            _userProfilesRepository.Delete(firebaseUserId);
            return NoContent();
        }
    }
}
