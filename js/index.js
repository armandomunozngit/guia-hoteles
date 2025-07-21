
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
    document.addEventListener('DOMContentLoaded', function () {
      const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
      popoverTriggerList.forEach(el => new bootstrap.Popover(el));
    });
    $('#modalReservar').on('show.bs.modal', function (e) { 
      console.log('el modal contacto se está mostrando');
      $('#btnReservar7').removeClass('btn-primary');
      $('#btnReservar7').addClass('btn-outline-success');
    });
    $('#modalReservar').on('shown.bs.modal', function (e) { console.log('el modal contacto se mostró');});
    $('#modalReservar').on('hide.bs.modal', function (e) { console.log('el modal contacto se oculta');});
    $('#modalReservar').on('hidden.bs.modal', function (e) { console.log('el modal contacto se ocultó');});

