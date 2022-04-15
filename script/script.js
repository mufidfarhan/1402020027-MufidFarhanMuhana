$(document).ready(function () {
	$("#paket-data").click(function () {
		$(".content-nav").removeClass("active");
		$(this).addClass("active");
		$("#nom-pulsa").hide();
		$("#nom-data").show();
		$("#no-telp").val("");
		$("#nom-pulsa, #nom-data, #button-beli").prop("disabled", true);
		$("#nom-data").val("");
	});

	$("#pulsa").click(function () {
		$(".content-nav").removeClass("active");
		$(this).addClass("active");
		$("#nom-pulsa").show();
		$("#nom-data").hide();
		$("#no-telp").val("");
		$("#nom-pulsa, #nom-data, #button-beli").prop("disabled", true);
		$("#nom-pulsa").val("");
	});

	$("#no-telp").keyup(function () {
		var inputVal = $(this).val();
		var numericReg = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/;
		if (numericReg.test(inputVal)) {
			$("#nom-pulsa, #nom-data").prop("disabled", false);
		} else {
			$("#nom-pulsa, #nom-data").prop("disabled", true);
		}
	});

	$("select option[value='']:selected").attr("disabled", "disabled");

	$("#nom-pulsa, #nom-data").change(function () {
		$("#button-beli").prop("disabled", false);
	});

	$("#button-beli").click(function () {
		if ($("#pulsa").hasClass("active")) {
			if (
				confirm(
					"Pembelian pulsa sebesar " +
						$("#nom-pulsa").val().split(",")[0] +
						" ke nomor " +
						$("#no-telp").val()
				)
			) {
				alert(
					"Total harga pulsa Rp. " +
						$("#nom-pulsa").val().split(",")[1] +
						",- ke nomor " +
						$("#no-telp").val() +
						" sedang di proses. Terima Kasih :)"
				);
			}
		} else if ($("#paket-data").hasClass("active")) {
			if (
				confirm(
					"Pembelian paket data " +
						$("#nom-data").val().split(",")[0] +
						" ke nomor " +
						$("#no-telp").val()
				)
			) {
				alert(
					"Total harga paket data Rp. " +
						$("#nom-data").val().split(",")[1] +
						",- ke nomor " +
						$("#no-telp").val() +
						" sedang di proses. Terima Kasih :)"
				);
			}
		}
		$("#no-telp:input").val("");
		$("#nom-data, #nom-pulsa").prop("selectedIndex", 0);
		$("#nom-pulsa, #nom-data, #button-beli").prop("disabled", true);
	});
});
