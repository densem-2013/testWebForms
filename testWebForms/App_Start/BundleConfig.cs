using System.Web.Optimization;

namespace testWebForms
{
    public class BundleConfig
    {
        // For more information on Bundling, visit https://go.microsoft.com/fwlink/?LinkID=303951
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/myJs").Include(
                            "~/Scripts/jquery-3.3.1.js",
                            "~/Scripts/jquery-watch.js",
                            "~/Scripts/myjs.js"));
        }
    }
}