namespace Blog.Areas.Administration.Controllers
{
    using System.Web.Mvc;
    using Data;
    using UnitOfWork;

    public class UsersController : BaseAdminController
    {
        public UsersController() 
            : this(new BlogData(new BlogContext()))
        {
        }

        public UsersController(IBlogData data)
           : base(data)
        {
        }

        // GET: Administration/Users
        public ActionResult Index()
        {
            return this.View();
        }
    }
}