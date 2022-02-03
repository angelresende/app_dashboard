$(document).ready(() => {
	
	$('#documentacao').on('click', () => {
		$('#pagina').load('documentacao.html')		
	})

	$('#suporte').on('click', () => {
		$('#pagina').load('suporte.html')
	})


	//ajax
	$('#competencia').on('change', e => {

		let competencia = $(e.target).val()
		
		$.ajax({
			type: 'GET',
			url: 'app.php',
			data: `competencia=${competencia}`, 
			dataType: 'json',
			success: dados => { 
				
				$('#numeroVendas').html(dados.numeroVendas)
				$('#totalVendas').html(`R$ ${dados.totalVendas}`)
				$('#clientesAtivos').html(dados.clientesAtivos)
				$('#clientesInativos').html(dados.clientesInativos)				
				$('#totalReclamacoes').html(dados.totalReclamacoes)				
				$('#totalElogios').html(dados.totalElogios)				
				$('#totalSugestoes').html(dados.totalSugestoes)				
				$('#totalDespesas').html(`R$ ${dados.totalDespesas}`)
				
			},
			error: erro => { console.log(erro) }
		})
	})
})