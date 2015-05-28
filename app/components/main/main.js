var mainViewModelModule = require("./main-view-model");
var viewModel = new mainViewModelModule.MainViewModel();
function navigatedTo(args) {
    var page = args.object;
    page.bindingContext = viewModel;
    viewModel.refresh();
}
exports.navigatedTo = navigatedTo;
function listViewItemTap(args) {
    viewModel.viewTask(args.view.bindingContext);
}
exports.listViewItemTap = listViewItemTap;
function completeTaskButtonTap(args) {
    var view = args.view;
    var viewTaskViewModel = view.bindingContext;
    viewTaskViewModel.completeTask();
}
exports.completeTaskButtonTap = completeTaskButtonTap;
//# sourceMappingURL=main.js.map