players = [
    {name: 'DK'
    team: 'seattle'},
    {name: 'Geno'
    team: 'seattle'},
    {name: 'Russel'
    team: 'denver'},
]

seahawks = (p.name for p in players when p.team == 'seattle')

for player in seahawks
    console.log player