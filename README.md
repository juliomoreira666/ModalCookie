# ModalCookie



Script para gerar o cookie:

$(window).load(function () {
	// if no cookie
	if ($.cookie('alert') != "true") {
		$("#reModalMask").show();
		// Botão para ocultar/Fechar o modal
		$("#botao").click(function () {
			// Div Geral para o Modal
			$("#reModalMask").slideUp("slow");
			// O cookie está setado para 1 dia para expiração
			var date = new Date();
			date.setTime(date.getTime() + 1 * 60 * 60 * 1000);
			$.cookie('alert', "true", {
				expires: date
			});
		});
	}
});

Arquivos externos necessários : 

http://cdn.shopify.com/s/files/1/0437/4361/t/9/assets/jquery.cookie.js?374961671??8764010363
