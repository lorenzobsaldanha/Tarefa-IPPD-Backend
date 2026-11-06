A tarefa foi realizada usando o software Insomnia.

Ao dar GET http://localhost:3000/tasks com o tasks.json vazio:  


[]  


Após o POST http://localhost:3000/tasks  
{
  "descricao": "Tarefa 1",
  "inicio": 10,
  "fim": 20
}  
............................  
{
	"id": 1,
	"descricao": "Tarefa 1",
	"inicio": 10,
	"fim": 20,
	"status": "PENDENTE",
	"resultado": null
}


Após POST
{
  "descricao": "Soma dois numeros",
  "inicio": 50,
  "fim": 80
}

e GET
...................
[
	{
		"id": 1,
		"descricao": "Tarefa 1",
		"inicio": 10,
		"fim": 20,
		"status": "PENDENTE",
		"resultado": null
	},
	{
		"id": 2,
		"descricao": "Soma dois numeros",
		"inicio": 50,
		"fim": 80,
		"status": "PENDENTE",
		"resultado": null
	}
]
===================
Após PUT http://localhost:3000/tasks/2
{
		"descricao": "Soma dois numeros",
		"inicio": 50,
		"fim": 80,
		"status": "CONCLUIDA",
		"resultado": 130
	}

e GET http://localhost:3000/tasks
------------------
[
	{
		"id": 1,
		"descricao": "Tarefa 1",
		"inicio": 10,
		"fim": 20,
		"status": "PENDENTE",
		"resultado": null
	},
	{
		"id": 2,
		"descricao": "Soma dois numeros",
		"inicio": 50,
		"fim": 80,
		"status": "CONCLUIDA",
		"resultado": 130
	}
]
======================
Após PATCH http://localhost:3000/tasks/1
{
  "descricao": "Isso aqui vai ir embora",
  "inicio": 10,
  "fim": 20,
	"status": "CONCLUIDO"
}

e GET http://localhost:3000/tasks
----------------------
[
	{
		"id": 1,
		"descricao": "Isso aqui vai ir embora",
		"inicio": 10,
		"fim": 20,
		"status": "CONCLUIDO",
		"resultado": null
	},
	{
		"id": 2,
		"descricao": "Soma dois numeros",
		"inicio": 50,
		"fim": 80,
		"status": "CONCLUIDA",
		"resultado": 130
	}
]
========================
Após DELETE http://localhost:3000/tasks/1
e GET http://localhost:3000/tasks
-------------------------
[
	{
		"id": 2,
		"descricao": "Soma dois numeros",
		"inicio": 50,
		"fim": 80,
		"status": "CONCLUIDA",
		"resultado": 130
	}
]
=========================
Após POST http://localhost:3000/tasks
[
	{
		"id": 2,
		"descricao": "Soma dois numeros",
		"inicio": 50,
		"fim": 80,
		"status": "CONCLUIDA",
		"resultado": 130
	},
	{
		"id": 3,
		"descricao": "Nova tarefa",
		"inicio": 0,
		"fim": 1,
		"status": "PENDENTE",
		"resultado": null
	}
]

e GET http://localhost:3000/tasks
------------------------
[
	{
		"id": 2,
		"descricao": "Soma dois numeros",
		"inicio": 50,
		"fim": 80,
		"status": "CONCLUIDA",
		"resultado": 130
	},
	{
		"id": 3,
		"descricao": "Nova tarefa",
		"inicio": 0,
		"fim": 1,
		"status": "PENDENTE",
		"resultado": null
	}
]
