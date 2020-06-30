using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Gifter.Data;
using Gifter.Models;

namespace Gifter.Repositories
{
    public class UserProfilesRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfilesRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public List<UserProfile> GetAll()
        {
            return _context.UserProfile.ToList();
        }

        public UserProfile GetById(int id)
        {
            return _context.UserProfile.FirstOrDefault(up => up.Id == id);
        }

        public void Add(UserProfile up)
        {
            _context.Add(up);
            _context.SaveChanges();
        }

        public void Update(UserProfile up)
        {
            _context.Entry(up).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var userProfile = GetById(id);
            _context.UserProfile.Remove(userProfile);
            _context.SaveChanges();
        }
    }
}
