<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string',
            'email'   => 'required|email',
            'phone'   => 'nullable|string',
            'message' => 'required|string',
        ]);
        
        // Переименовываем message в body
        $validated['body'] = $validated['message'];
        unset($validated['message']);

        Mail::send('emails.contact', $validated, function($mail) use ($validated) {
            $mail->to('erustamow2@gmail.com')
                 ->subject('Сообщение с контактной формы');
        });

        return response()->json(['success' => true]);
    }
}