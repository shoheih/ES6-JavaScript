const team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function() {
        return this.members.map((member) => {
            // lexical this
            // this === team
            return `${member}は${this.teamName}の所属です。`;
        });
    }
};

console.log(team.teamSummary());