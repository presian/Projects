namespace Blog.UnitOfWork
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using Data;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using Repositories;

    public class BlogData : IBlogData
    {

        private readonly DbContext dbContext;

        private readonly IDictionary<Type, object> repositories;

        private IUserStore<User> userStore;
        private IRepository<Article> articles;

        public BlogData()
            : this(new BlogContext())
        {
        }

        public BlogData(DbContext dbContext)
        {
            this.dbContext = dbContext;
            this.repositories = new Dictionary<Type, object>();
        }

        public IRepository<User> Users => this.GetRepository<User>();

        public IRepository<IdentityRole> Roles => this.GetRepository<IdentityRole>();

        public IRepository<Article> Articles => this.GetRepository<Article>();

        public IUserStore<User> UserStore => this.userStore ?? (this.userStore = new UserStore<User>(this.dbContext));

        public void SaveChanges()
        {
            this.dbContext.SaveChanges();
        }

        private IRepository<T> GetRepository<T>() where T : class
        {
            if (!this.repositories.ContainsKey(typeof (T)))
            {
                var type = typeof (GenericRepository<T>);
                this.repositories.Add(typeof (T),
                    Activator.CreateInstance(type, this.dbContext));
            }

            return (IRepository<T>) this.repositories[typeof (T)];
        }
    }
}