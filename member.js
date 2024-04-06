function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/components/member/skills-member.html',
    scope: {
      member: '='
    },
    controller: function() {
      var vm = this;
      vm.skills = vm.member.skills;
    },
    controllerAs: 'vm',
    bindToController: true
  };
}