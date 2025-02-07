$(function(){window.notas=function(){return{id:"step-notas",init:function(){let a=this;window.BlockSection(a.id),window.DataTableNotas.init()}}}(),window.DataTableNotas=function(){return{init:function(){var a=$(".datatables-examen").dataTable({searching:!1,lengthChange:!1,paging:!1,info:!1,ajax:{url:"/informacion-academica/cursos/notas",type:"POST",dataType:"json",data:function(t){t.codper=codper,t.codcur=codcur,t.seccion=seccion},error:function(t){showErrors(t)},complete:function(t){let o=t.responseJSON,n=o.formulas,i=o.promedios;n&&($("#txt-formula-practicas").html(n.practicas),$("#txt-formula-nota-final").html(n.teoria)),i&&($("#txt-promedio-practicas").html(i.promedio_practicas??"--"),$("#txt-promedio-final").html(i.promedio_final??"--"),i.promedio_final>=17&&$("#txt-icon-promedio-final").html('<i class="ti ti-ufo ti-sm" title="Este es un marciano!"></i>')),$("#"+window.notas.id).unblock()}},columns:[{data:"camnot",name:"camnot",visible:!1},{data:"descripcion",name:"descripcion",width:"40%",className:"dt-left"},{data:"nota",name:"nota",width:"5%",className:"dt-center"},{data:"reclamo",name:"reclamo",width:"5%",className:"dt-center"},{data:"fecha_registro_acta",name:"fecha_registro_acta",type:"date",width:"10%",className:"dt-center"},{data:"anonimo",name:"anonimo",width:"5%",className:"dt-center"},{data:"opcion",name:"opcion",width:"40%",className:"dt-center"}],columnDefs:[{targets:1,render:function(t,o,n,i){var e;switch(n.camnot){case 1:case 12:e="N"+n.camnot;break;case 13:e="EP";break;case 14:e="EF";break;case 15:e="ES";break;default:e="N"+n.camnot;break}return t+" ("+e+")"}},{targets:2,render:function(t,o,n,i){let e,c;return n.flgnot?(e="0A",c="bg-label-danger"):(e=t??"--",t>=10?c="bg-label-success":c="bg-label-warning"),'<span class="badge '+c+'">'+e+"</span>"}},{targets:3,render:function(t,o,n,i){let e,c;return t&&(e=t??"",t>=10?c="bg-label-success":c="bg-label-warning"),'<span class="badge '+c+'">'+e+"</span>"}},{targets:-1,orderable:!1,render:function(t,o,n,i){let e="",c="";return n.examen&&n.examen.fecregpre&&(e='<button type="button" class="btn btn-icon btn-label-warning waves-effect btn-preguntas" title="Descargar Preguntas"><i class="ti ti-file-unknown me-sm-1"></i></button>'),n.examen&&n.examen.fecregsol&&(c='<button type="button" class="btn btn-icon btn-label-success waves-effect btn-solucionario" title="Descargar Solucionario"><i class="ti ti-file-check me-sm-1"></i></button>'),'<div class="demo-inline-spacing"><button type="button" class="btn btn-icon btn-label-info waves-effect btn-reclamo" title="Presentar Reclamo"><i class="tf-icons ti ti-user-exclamation me-sm-1"></i></button>'+e+c+"</div>"}}],order:[[0,"asc"]],dom:'<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',displayLength:15,buttons:[]});return $(".datatables-examen tbody").on("click","button.btn-reclamo",function(){s(a.fnGetData($(this).parents("tr")[0]))}),$(".datatables-examen tbody").on("click","button.btn-preguntas",function(){l(a.fnGetData($(this).parents("tr")[0]))}),$(".datatables-examen tbody").on("click","button.btn-solucionario",function(){d(a.fnGetData($(this).parents("tr")[0]))}),$("div.head-label").html('<h5 class="card-title mb-0">Notas</h5>'),a}}}();function s(a){const t=window.notas.id;$.ajax({url:"/informacion-academica/cursos/notas/reclamar",type:"POST",dataType:"json",data:{codper,codcur,seccion,camnot:a.camnot},beforeSend:function(){window.BlockSection(t)},success:function(o){if(o.status){const n=$("#modal-presentar-reclamo");n.find("#lbl-examen").html(a.descripcion||""),n.find("#lbl-errors").html(""),n.modal("toggle");const i=n.find("#txt-comentario"),e=n.find("#btn-enviar");i.val(""),e.off("click"),e.on("click",()=>{if(i.val()==""){n.find("#lbl-errors").html("El comentario es requerido para su solicitud.");return}$("#modal-presentar-reclamo").find("#lbl-errors").html("");var c={codper,codcur,seccion,camnot:a.camnot,comentario:i.val()};Swal.fire({title:"Enviar Solicitud",html:"¿Desea enviar su solicitud de reclamo?:",icon:"question",showCancelButton:!0,confirmButtonText:"Sí, enviar!",cancelButtonText:"Cancelar",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1}).then(function(m){m.value&&a&&r(c)})})}},complete:function(){$("#"+t).unblock()},error:function(o){showErrors(o)}})}function r(a){const t="modal-presentar-reclamo";$.ajax({url:"/informacion-academica/cursos/notas/reclamar/save",type:"POST",dataType:"json",data:a,beforeSend:function(){window.BlockSection(t)},success:function(o){o.status&&($("#modal-presentar-reclamo").modal("hide"),Swal.fire({title:"¡Registrado!",text:o.message,icon:"success",confirmButtonColor:"#34c38f",cancelButtonColor:"#f46a6a",confirmButtonText:"Cerrar",customClass:{confirmButton:"swal2-confirm btn btn-primary",cancelButton:"swal2-cancel btn btn-label-danger d-none"},buttonsStyling:!1}))},complete:function(){$("#"+t).unblock()},error:function(o){showErrors(o)}})}function l(a){window.notas.id,window.open("/informacion-academica/cursos/"+codper+"/"+codcur+"/"+seccion+"/download-preguntas/"+a.idsub)}function d(a){window.notas.id,window.open("/informacion-academica/cursos/"+codper+"/"+codcur+"/"+seccion+"/download-solucionario/"+a.idsub)}});
