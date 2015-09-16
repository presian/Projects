namespace Blog.Areas.Administration.Controllers
{
    using System.Web.Mvc;
    using Data;
    using UnitOfWork;

//    [Authorize(Roles = "SuperAdmin")]
    [Authorize]
    public class ArticlesController : BaseAdminController
    {
        public ArticlesController()
           : this(new BlogData(new BlogContext()))
        {
        }

        public ArticlesController(IBlogData data)
            : base(data)
        {
        }
        // GET: Administration/Articles
        public ActionResult Index()
        {
            return this.View();
        }

       
    }
}