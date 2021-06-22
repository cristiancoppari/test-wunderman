const submitBtn = document.querySelector('form .btn-primary');

const clickHandler = (e) => {
  e.preventDefault();
  Swal.fire({
    title: 'Do you want to submit the form?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Submit`,
    denyButtonText: `Don't submit`,
    icon: 'question',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Your form has been submitted', '', 'success');
    } else if (result.isDenied) {
      Swal.fire('Your form has not been submitted', '', 'info');
    }
  });
};

submitBtn.addEventListener('click', clickHandler);
