namespace Blog.Areas.Administration.Controllers
{
    using System.Web.Mvc;
    using UnitOfWork;

    public abstract class BaseAdminController : Controller
    {
        private IBlogData data;

        protected BaseAdminController(IBlogData data)
        {
            this.data = data;
        }

        public IBlogData Data => this.data;

        public string SectionTitel { get; set; } = "Административен панел, начало";
    }
}
