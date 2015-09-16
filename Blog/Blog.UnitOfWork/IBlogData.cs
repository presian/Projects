namespace Blog.UnitOfWork
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using Repositories;

    public interface IBlogData
    {
        IRepository<User> Users { get; }

        IRepository<IdentityRole> Roles { get; }

        IRepository<Article> Articles { get; }

        IUserStore<User> UserStore { get; }

        void SaveChanges();
    }
}
