<p><strong>Имя:</strong> {{ $name }}</p>
<p><strong>Email:</strong> {{ $email }}</p>
@if(!empty($phone))
  <p><strong>Телефон:</strong> {{ $phone }}</p>
@endif
<p><strong>Сообщение:</strong></p>
<p>{{ $body }}</p>