const Usuario = require('./models/usuario');
const Categoria = require('./models/categoria');
const Tarefa = require('./models/tarefa');

// Relacionamentos
Tarefa.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(Tarefa, { foreignKey: 'usuarioId' });
Tarefa.belongsTo(Categoria, { foreignKey: 'categoriaId' });
Categoria.hasMany(Tarefa, { foreignKey: 'categoriaId' });

(async () => {
    await database.sync({ alter: true }); // Atualiza o banco
})();

(async () => {
    const database = require('./db');
    const Tarefa = require('./tarefa');

    await database.sync();

    await Tarefa.destroy({ where: {}, truncate: true });

    const tarefas = [
        {
            Titulo: "exemplo1",
            Descricao: "Estudar",
            DataVencimento: new Date(),
            Status: "Aberto",
        },
        {
            Titulo: "exemplo2",
            Descricao: "Caminhar",
            DataVencimento: new Date(),
            Status: "Em andamento",
        },
        {
            Titulo: "exemplo3",
            Descricao: "Trabalhar",
            DataVencimento: new Date(),
            Status: "Concluído",
        },
    ];

    for (const tarefa of tarefas) {
        let tarefaExistente = await Tarefa.findByPk(tarefa.Titulo);
        if (!tarefaExistente) {
            await Tarefa.create(tarefa);
        } else {
            console.log(`A tarefa com o título "${tarefa.Titulo}" já existe.`);
        }
    }

    // Alterando um registro
    const alterProd = await Tarefa.findByPk("exemplo1");
    if (alterProd) {
        alterProd.Titulo = "Arquivo Alterado";
        await alterProd.save();
    } else {
        console.log("Registro não encontrado para alterar.");
    }

    // Removendo um registro
    await Tarefa.destroy({ where: { Titulo: "exemplo2" } });

    // Buscando um único registro
    const findProd = await Tarefa.findByPk("exemplo3");
    console.log(findProd);

    // Buscando todos os registros
    const findAllProd = await Tarefa.findAll();
    console.log(findAllProd);
})();         